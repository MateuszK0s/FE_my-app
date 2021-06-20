interface IProps {
    children: JSX.Element;
}

const FullScreenLayout = ({ children }: IProps) => {
    return (
        <div>

            {children}

        </div>
    );
}

export default FullScreenLayout;