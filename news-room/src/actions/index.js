
export const selectedCategory = category => (
    {
        type: 'CATEGORY_SELECTED',
        category
    }
)

export const apiError = bool => (
    {
        type: 'API_ERROR',
        error: bool
    }
)
  
export const apiLoading = bool => (
    {
        type: 'API_LOADING',
        loading: bool
    }
)
  
export const apiSuccess = news => (
    {
        type: 'API_SUCCESS',
        news
    }
)

  
  
export const getNewsByCategory = category => {
    return dispatch => {

        dispatch(apiError(false))

        dispatch(apiLoading(true))

        fetch(`https://newsapi.org/v2/everything?q=${category}&pageSize=11&language=es&excludeDomains=elespanol.com&apiKey=1462eabbd1b34c598aa8dfffe6d5779f`)
        .then((response) => {
            if (!response.ok) {
            throw Error(response.statusText)
            }

            dispatch(apiLoading(false))

            return response
        })
        .then((response) => response.json())
        .then((news) => dispatch(apiSuccess(news.articles)))
        .catch(() => dispatch(apiError(true)))
    }
}

export const getLatestNews = date => {
    return dispatch => {

        dispatch(apiError(false))

        dispatch(apiLoading(true))

        fetch(`https://newsapi.org/v2/everything?sortBy=popularity&excludeDomains=elespanol.com&pageSize=11&language=es&apiKey=1462eabbd1b34c598aa8dfffe6d5779f`)
        .then((response) => {
            if (!response.ok) {
            throw Error(response.statusText)
            }

            dispatch(apiLoading(false))
            
            return response
        })
        .then((response) => response.json())
        .then((news) => dispatch(apiSuccess(news.articles)))
        .catch(() => dispatch(apiError(true)))
    }
}


export const getCategory = category => {
    return dispatch => {

        dispatch(selectedCategory(category));

    }
}
