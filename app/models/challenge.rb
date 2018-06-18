class Challenge < ApplicationRecord
  validates :number, uniqueness: true, numericality: { greater_than: 0 }
end
