import './Message.css';

const Message = props => {

  return (
    <>
      {(props.currentUrl === '/movies') &&
        <p className={`message ${props.movies.length === 0 && !props.errorMessage && !props.isLoading ? '' : 'message_hidden'}`}>
          {props.message}
        </p>
      }
      {
        (props.currentUrl === '/profile') &&
        <p className={`message ${props.isSuccessfulUpdate ? '' : 'message_hidden' }`}>
          {props.message}
        </p>
      }
    </>
  );
}

export default Message;
