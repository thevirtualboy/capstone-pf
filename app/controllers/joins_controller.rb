class JoinsController < ApplicationController

    def index
        joins = Join.all
        render json: joins
    end

    def show
        join = Join.find(params[:id])
        render json: join
    end 

    def create
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        join = Join.create(params_join)
        render json: join
    end

    def update
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        join = Join.find(params[:id])
        join.update(params_join)
        render json: join
    end

    #Delete
    def destroy
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        join = Join.find(params[:id])
        join.destroy!
        head :no_content   
    end

    private

    def params_join
        params.permit(:game_id, :user_id)
    end

end
