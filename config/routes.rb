Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/register' => 'users#create'
  get '/authenticate' => 'authentication#authenticate'
  scope 'users/:user_id' do
    resources 'history_items', only: [:create, :index, :destroy], path: 'history'
  end
end
