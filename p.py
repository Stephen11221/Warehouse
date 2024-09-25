from cryptography.fernet import Fernet

# Generate a key
key = Fernet.generate_key()
cipher = Fernet(key)

# Encrypt a message
original_message = b"Secret Data"
encrypted_message = cipher.encrypt(original_message)

# Decrypt the message
decrypted_message = cipher.decrypt(encrypted_message)
#########################################################

import pandas as pd
from faker import Faker

fake = Faker()
data = {
    'Name': [fake.name() for _ in range(10)],
    'Email': [fake.email() for _ in range(10)],
    'Phone': [fake.phone_number() for _ in range(10)]
}
df = pd.DataFrame(data)
# Anonymize email
df['Email'] = df['Email'].apply(lambda x: fake.email())

########################################################################
from flask import Flask, request, jsonify
from cryptography.fernet import Fernet
import pandas as pd

app = Flask(__name__)

@app.route('/encrypt', methods=['POST'])
def encrypt():
    key = request.json['key']
    data = request.json['data'].encode()
    cipher = Fernet(key)
    encrypted_data = cipher.encrypt(data)
    return jsonify({'encrypted_data': encrypted_data.decode()})

@app.route('/anonymize', methods=['POST'])
def anonymize():
    data = request.json['data']
    df = pd.DataFrame(data)
    df['Email'] = df['Email'].apply(lambda x: fake.email())
    return jsonify(df.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True)
 