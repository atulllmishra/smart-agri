import requests
import pandas as pd

# SerpAPI key (Replace with your actual API key)
API_KEY = "12a0690a23d8d09af0c65223f0da3def0791295378c4e7897c0cfe5d6ba1bda2"

# Function to fetch crop price
def fetch_crop_price(crop_name, state):
    params = {
        "engine": "google",
        "q": f"{crop_name} price per kg in {state}, India",
        "api_key": API_KEY,
    }
    
    response = requests.get("https://serpapi.com/search", params=params)
    data = response.json()
    
    # Extract relevant data (Parsing might depend on search results structure)
    for result in data.get("organic_results", []):
        snippet = result.get("snippet", "")
        if "₹" in snippet:
            return result.get("title", "No title found") + " - " + snippet  # Return complete detail
    
    return "No data found"

# Function to get user input
def get_user_input():
    crop_name = input("Enter the crop name: ")
    state = input("Enter the Indian state: ")
    return crop_name, state

# Get user input
crop, state = get_user_input()

# Fetching price
data = [[crop, state, fetch_crop_price(crop, state)]]

# Display in table format
pd.set_option("display.max_colwidth", None)  # Ensure full text is displayed
pd.set_option("display.width", 200)  # Increase table width

df = pd.DataFrame(data, columns=["Crop", "State", "Price Details"])
print(df)
