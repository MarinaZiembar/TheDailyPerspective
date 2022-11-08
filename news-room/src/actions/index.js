
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

        fetch(`http://api.mediastack.com/v1/news?access_key=1d118e64a8bb471c61fa509198295741&languages=es&limit=11&keywords=${category}&sort=published_desc`)
        .then((response) => {
            if (!response.ok) {
            throw Error(response.statusText)
            }

            dispatch(apiLoading(false))

            return response
        })
        .then((response) => response.json())
        .then((news) => dispatch(apiSuccess(news.data)))
        .catch(() => dispatch(apiError(true)))
    }
}

export const getLatestNews = date => {
    return dispatch => {

        dispatch(apiError(false))

        dispatch(apiLoading(true))

        fetch(`http://api.mediastack.com/v1/news?access_key=1d118e64a8bb471c61fa509198295741&languages=es&limit=11&sort=popularity&categories=general`)
        .then((response) => {
            if (!response.ok) {
            throw Error(response.statusText)
            }

            dispatch(apiLoading(false))
            
            return response
        })
        .then((response) => response.json())
        .then((news) => dispatch(apiSuccess(news.data)))
        .catch(() => dispatch(apiError(true)))
    }
}


export const getCategory = category => {
    return dispatch => {

        dispatch(selectedCategory(category));

    }
}
