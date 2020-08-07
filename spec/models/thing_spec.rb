# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Thing, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
  end

  describe '#slugify' do
    # let(:thing) { create(:thing, name: 'Megaman X3') }
    let(:thing) { Thing.create(name: 'Megaman X3') }
    let(:slug) { 'megaman-x3' }

    it 'returns the correct slug' do
      expect(thing.slug).to eq(slug)
    end
  end

  describe '#avg_score' do
    context 'when it does not have any reviews' do
      let(:thing) { Thing.create(name: 'Megaman X3') }
      # let(:reviews) { create_list(:thing, 3) }

      it 'returns the ' do
        expect(thing.avg_score).to eq(0)
      end
    end

    context 'when it has reviews' do
      let(:thing) { Thing.create(name: 'Megaman X3') }
      # let(:reviews) { create_list(:thing, 3) }
      let!(:review_1) { Review.create(thing: thing, score: 2) }
      let!(:review_2) { Review.create(thing: thing, score: 3) }

      it 'returns the correct slug' do
        expect(thing.avg_score).to eq(2.5)
      end
    end
  end
end
