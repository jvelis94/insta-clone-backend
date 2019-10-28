Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do 
    authenticated :user do
      root 'posts#index', as: :authenticated_root
    end
    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end

  resources :profiles
  resources :posts

  # get "/posts", to: "pages#home"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
end
