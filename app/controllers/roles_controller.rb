class RolesController < ApplicationController

    def index
        roles = Role.all
        render json: roles
    end

    def show
        role = Role.find(params[:id])
        render json: role, include: [:game]
    end 

    def create
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        role = Role.create(params_role)
        render json: role
    end

    def update
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        role = role.find(params[:id])
        role.update(params_role)
        render json: role
    end

    #Delete
    def destroy
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        role = Role.find(params[:id])
        role.destroy!
        head :no_content   
    end

    private

    def params_role
        params.permit(:name, :game_id)
    end

end
