import { Comment } from  'react-loader-spinner';

const Loader = () => {
    return (
        <div>
            <Comment
            visible={true}
            height="60"
            width="60"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            color="#fff"
            backgroundColor="#471CA9"
            />
        </div>
    )
}

export default Loader;