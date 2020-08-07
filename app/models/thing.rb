# frozen_string_literal: true

class Thing < ApplicationRecord
  has_many :reviews
  validates :name, presence: true

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    return 0 unless reviews.any?

    (reviews.sum(:score).to_f / reviews.count).to_f
  end
end
