import re
import pandas as pd
import streamlit as st
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler
import joblib
import nltk

# Download NLTK data if not already downloaded
nltk.download('punkt')
nltk.download('stopwords')

# Load dataset (for example, IMDb dataset)
def load_data(data_url):
    data = pd.read_csv(data_url)
    data = data[['review', 'sentiment']]  # Select only the relevant columns
    data['review'] = data['review'].fillna('')  # Fill missing values with an empty string
    data = data.dropna()  # Drop any rows that still contain NaN values
    return data

# Preprocessing function with negation handling
stemmer = PorterStemmer()
stop_words = set(stopwords.words('english'))
negation_words = {"not", "no", "never", "n't"}

def preprocess_text(text):
    text = re.sub('<.*?>', '', text)  # Remove HTML tags
    text = re.sub(r'[^\w\s]', '', text)  # Remove punctuation and non-alphabetic characters
    text = text.lower()  # Convert to lowercase
    tokens = word_tokenize(text)  # Tokenize the review
    
    processed_tokens = []
    negate = False

    for token in tokens:
        if token in negation_words:
            negate = True
            processed_tokens.append(token)
        else:
            if negate:
                token = "not_" + token  # Append 'not_' to the token
                negate = False  # Reset negation
            if token not in stop_words:
                processed_tokens.append(stemmer.stem(token))  # Apply stemming

    return ' '.join(processed_tokens)

# Train the model and vectorizer
def train_model(data):
    # Apply preprocessing
    data['cleaned_review'] = data['review'].apply(preprocess_text)

    # Split the data
    X_train, X_test, y_train, y_test = train_test_split(data['cleaned_review'], data['sentiment'], test_size=0.2, random_state=42)

    # Vectorize the text data
    tfidf_vectorizer = TfidfVectorizer(max_features=5000)
    X_train_tfidf = tfidf_vectorizer.fit_transform(X_train)
    X_test_tfidf = tfidf_vectorizer.transform(X_test)

    # Scale the data
    scaler = StandardScaler(with_mean=False)  # StandardScaler cannot compute mean if the input is sparse
    X_train_tfidf = scaler.fit_transform(X_train_tfidf)
    X_test_tfidf = scaler.transform(X_test_tfidf)

    # Train a logistic regression model
    model = LogisticRegression(max_iter=1000)
    model.fit(X_train_tfidf, y_train)

    # Evaluate the model
    y_pred = model.predict(X_test_tfidf)
    accuracy = accuracy_score(y_test, y_pred)
    st.write(f"Model Accuracy: {accuracy:.2f}")

    return model, tfidf_vectorizer, scaler

# Save the model and vectorizer
def save_model(model, vectorizer, scaler, model_path='model.pkl', vectorizer_path='tfidf.pkl', scaler_path='scaler.pkl'):
    joblib.dump(model, model_path)
    joblib.dump(vectorizer, vectorizer_path)
    joblib.dump(scaler, scaler_path)

# Load pre-trained model and vectorizer for prediction
def load_model(model_path='model.pkl', vectorizer_path='tfidf.pkl', scaler_path='scaler.pkl'):
    model = joblib.load(model_path)
    vectorizer = joblib.load(vectorizer_path)
    scaler = joblib.load(scaler_path)
    return model, vectorizer, scaler

# Function to preprocess and predict sentiment
def predict_sentiment(model, vectorizer, scaler, review):
    cleaned_review = preprocess_text(review)  # Preprocess the review text
    tfidf_review = vectorizer.transform([cleaned_review])  # Transform the review using the tf-idf vectorizer
    tfidf_review = scaler.transform(tfidf_review)  # Scale the transformed review
    sentiment_prediction = model.predict(tfidf_review)  # Predict sentiment
    return sentiment_prediction[0]  # Return the sentiment label

# Streamlit UI
def main():
    st.title("Sentiment Analysis")
    st.write("Enter a review to predict its sentiment.")

    # Load data and train model
    data_url = "Twitter_Data.csv"
    data = load_data(data_url)

    # Train or load model
    model, tfidf_vectorizer, scaler = train_model(data)
    save_model(model, tfidf_vectorizer, scaler)

    review_text = st.text_area("Enter Review:")
    if st.button("Predict Sentiment"):
        if review_text:
            predicted_sentiment = predict_sentiment(model, tfidf_vectorizer, scaler, review_text)
            st.write(f"Predicted Sentiment: {predicted_sentiment}")
        else:
            st.write("Please enter a review.")

if __name__ == '__main__':
    main()
