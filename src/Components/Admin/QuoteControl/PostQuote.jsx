import React, { useContext, useState } from 'react'
import quoteStyle from '../../Style/postQuote.module.css'
import api, { getAccessToken } from '../../../Services/api'
import Context from '../../../Context/Context'

const PostQuote = ({ setTogglewrapper, togglewrapper }) => {

    const { quoteData, setQuoteData, setLoading } = useContext(Context)

    const [quote, setQuote] = useState('')

    const handelQuoteSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        try {

            const res = await api.post('/api/quotes/addQuotes', { quote }, {
                headers: {
                    "access_token": getAccessToken()
                }
            })

            setLoading(false)

            if (res.status === 200) {

                let arr = quoteData?.map((item) => {
                    if (item.isActive === true) {
                        return { ...item, isActive: false }
                    } else {
                        return item
                    }
                })

                setQuoteData(arr.concat({ quote: quote, isActive: true, posted_On: Date.now() }))

                setQuote('')

                setTogglewrapper(false)
            }

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <div className={`${quoteStyle.backgroundWrapper} ${togglewrapper && quoteStyle.togglewrapper}`}>
            <div className={quoteStyle.background}></div>
            <div className={quoteStyle.container}>
                <div className={quoteStyle.topContainer}>
                    <button
                        className={quoteStyle.btnClose}
                        onClick={() => {
                            setTogglewrapper(false)
                            setQuote('')
                        }}
                    >
                        &times;
                    </button>
                </div>
                <div className={quoteStyle.bottomContainer}>
                    <form onSubmit={handelQuoteSubmit} className={quoteStyle.form}>
                        <div className={quoteStyle.formData}>
                            <label htmlFor="quote">Quote</label>
                            <textarea
                                rows={5}
                                required
                                minLength={5}
                                type="text"
                                id="quote"
                                placeholder='Quote'
                                onChange={(e) => setQuote(e.target.value)}
                                value={quote}
                            />
                        </div>
                        <div className={quoteStyle.formData}>
                            <button type='submit' className={quoteStyle.btnSubmit}>
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostQuote
