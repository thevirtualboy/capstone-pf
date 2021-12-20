Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'localhost:4000'
      
      resource '*', headers: :any, methods: [:get, :post], credentials: :true
    end
  end