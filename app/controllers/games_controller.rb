class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end

    def show
        game = Game.find(params[:id])
        render json: game, include: [:users, :roles]
    end 

    def create
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        game = Game.create(params_game)
        render json: game
    end

    def update
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        game = Game.find(params[:id])
        game.update(params_game)
        render json: game
    end

    #Delete
    def destroy
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        game = Game.find(params[:id])
        game.destroy!
        head :no_content   
    end

    private

    def params_game
        params.permit(:title, :image, :genre, :description)
    end

end
