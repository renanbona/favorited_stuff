# frozen_string_literal: true

module Api
  module V1
    class ThingsController < ApplicationController
      def index
        @things = Thing.all

        render json: ThingSerializer.new(@things).serialized_json
      end

      def show
        @thing = Thing.find_by(slug: params[:slug])

        render json: ThingSerializer.new(@thing).serialized_json
      end

      def create
        thing = Thing.new(things_params)

        if thing.save
          render json: ThingSerializer.new(thing).serialized_json
        else
          render json: { error: thing.errors.messages }, status: 422
        end
      end

      private

      def things_params
        params.require(:thing).permit(:name, :image_url)
      end
    end
  end
end
