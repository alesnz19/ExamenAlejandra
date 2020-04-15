json.extract! client, :id, :name, :lastname, :lastnamem, :age, :phone, :street, :colony, :housenumber, :town, :created_at, :updated_at
json.url client_url(client, format: :json)
