### To Run The App

1. you can git clone the repo https://github.com/andritanuarto/iextrading.git

2. make sure you cd to `iextrading` and run `npm i` to install all dependencies.

3. Run ```npm run prod``` for production minified version it should open your browser window on `http://localhost:8080/`.

  - Run ```npm run dev``` if you prefer seeing non-minified dev version.

  - Run ```npm run build-sass-prod``` In case the app doesn't render the css.


### Note

I assume on this assignment I only need to choose one of the market list from https://iextrading.com/developer/docs/#list
but I opted to have a dropdown for different market lists such as:
  - in focus,
  - most active
  - gainers
  - losers
  - IEX volume

This dropdown will correspond to the next symbols dropdown and all symbols are listed based on the choosen market list category.

I noticed when I worked at night the `/stock/market/list/mostactive` and `/stock/market/list/iexpercent` are not available. I believe this api is a real-time api. So it follows the time of the stock market open and close hours.

User can also search stock symbol by pressing the `Search Stock Symbol` button. Once the button is clicked the search bar will be shown where user can type the stock symbol to search.

``Try for example `FB` or `fb` or `Fb` for Facebook.``

I also noticed this api end-point, i.e. `/stock/fb/company` doesn't have stock price info, but every symbol from `/stock/market/list/` has that information. Because my assumption of this functionality is to allow user to search any symbol outside the market list. So user might see the Current Stock Price info marked as `N/A`.

Some additional features:
  - animation when the page is rendered
  - loader when doing the http request
  - validations if the market list is not available and the correspond symbols dropdown won't be shown
  - validations if the search symbol can't be found


Please email me at andritanuarto@gmail.com if you have a problem running the application. Thank you.