# Movie Lister
A React/Redux app with a Rails backend that allows you to find movie info from IMDB.com.  A live demo can be found at https://movie-lister.herokuapp.com/

## Installation

To run a local version of this program, open your BASH console to the desired download directory, and type the following to download the app repository

    $ git clone git@github.com:jinstrider2000/movie-lister.git

Once in the repository, type the following to ensure you have all the prerequiste software

    $ bundle install && cd client && npm install && cd ..

Finally, set up the application database

    $ rails db:migrate

## Usage

In your BASH console, type the following to run the local server

    $ rails s -p 3001 && cd client && npm start

Lastly, open your favorite browser (i.e. Chrome, Edge, etc...) and visit this address: localhost:3000

## Development

To develop further upon this app, fork and clone the repository located at https://github.com/jinstrider2000/movie-lister. Again, be sure to have the Bundler gem installed, and run:

    $ bundle install && cd client && npm install

This will download any dependencies for development.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/jinstrider2000/movie-lister

## Version Changes

1/20/19: Started updated for Top 10 listing feature.

## License

This app is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

Also, my blog: [One line (of code) at a time](http://www.one-line-at-a-time.com/)
