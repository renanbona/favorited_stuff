class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :thing_id
end
