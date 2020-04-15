class Client < ApplicationRecord
  has_many  :accounts , dependent: :destroy,foreign_key: "client_id"
end
