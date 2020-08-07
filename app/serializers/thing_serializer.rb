# frozen_string_literal: true

class ThingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug, :image_url
  has_many :reviews
end
