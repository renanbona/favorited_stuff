# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Things', type: :request do
  describe 'GET /things' do
    it 'returns a 200 ok' do
      get '/api/v1/things'

      expect(response).to have_http_status(200)
    end

    it 'returns a list with all the things' do
      thing = Thing.create(name: 'Boyce Avenue')
      get '/api/v1/things'

      response_body = JSON.parse(response.body)
      things = response_body['data']
      attributes = things.first['attributes']

      expect(things.size).to eq 1
      expect(attributes['name']).to eq('Boyce Avenue')
      expect(attributes['slug']).to eq('boyce-avenue')
    end
  end

  describe 'GET /things/:slug' do
    it 'returns the correct thing' do
      thing = Thing.create(name: 'Boyce Avenue')
      get "/api/v1/things/#{thing.slug}"

      response_body = JSON.parse(response.body)
      thing_attributes = response_body['data']['attributes']

      expect(thing_attributes['name']).to eq('Boyce Avenue')
      expect(thing_attributes['slug']).to eq('boyce-avenue')
    end
  end
end
