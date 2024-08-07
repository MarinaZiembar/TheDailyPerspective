
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

        fetch(`https://api.spaceflightnewsapi.net/v4/articles?search=${category}`)
        .then((response) => {
            if (!response.ok) {
            throw Error(response.statusText)
            }

            dispatch(apiLoading(false))

            return response
        })
        .then((response) => response.json())
        .then((news) =>{ dispatch(apiSuccess(news.results))})
        .catch(() => dispatch(apiError(true)))
    }
}

export const getLatestNews = date => {
    return dispatch => {

        dispatch(apiError(false))

        dispatch(apiLoading(true))

        fetch(`https://api.spaceflightnewsapi.net/v4/articles?ordering=updated_at`)
        .then((response) => {
            if (!response.ok) {
            throw Error(response.statusText)
            }

            dispatch(apiLoading(false))
            
            return response
        })
        .then((response) => response.json())
        .then((news) => dispatch(apiSuccess(news.results)))
        .catch(() => dispatch(apiError(true)))
    }
}


export const getCategory = category => {
    return dispatch => {

        dispatch(selectedCategory(category));

    }
}
