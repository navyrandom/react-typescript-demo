type GreetProps = {
  name: string;
  messagesCount: number;
  loggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>
          {props.loggedIn ? `Welcome ${props.name}! you have ${props.messagesCount} messages
      ` : `welcome`}
        </h1>
    </div>
  );
};
