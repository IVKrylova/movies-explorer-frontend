import './Message.css';

const Message = props => {

  return (
    <p className={`message ${props.movies.length === 0 && !props.errorMessage && !props.isLoading ? '' : 'message_hidden'}`}>
      {props.message}
    </p>
  );
}

export default Message;
