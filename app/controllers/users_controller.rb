class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end 

    def showme
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end 

    def create
        user = User.create(params_user)
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find(params[:id])
        user.update(params_user)
        render json: user
    end

    #Delete
    def destroy
        user = User.find(params[:id])
        user.destroy!
        head :no_content   
    end

    private

    def params_user
        params.permit(:username, :email, :avatar, :password, :password_confirmation)
    end

end
