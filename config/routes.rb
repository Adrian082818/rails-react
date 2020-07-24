Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do 
    resources :games do 
      resources :reviews
    end 
  end 
end
