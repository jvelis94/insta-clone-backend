Rails.application.routes.draw do
  
  devise_for :users, controllers: { registrations: "registrations" }

  devise_scope :user do 
    authenticated :user do
      root 'posts#index', as: :authenticated_root
    end
    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end

  resources :profiles

  resources :posts do
    resources :comments
  end

  resources :comments do
    resources :comments
  end

  resources :posts do
    member do
      patch :addLike
      patch :decreaseLike
    end
  end
  # get "/posts", to: "pages#home"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
end
