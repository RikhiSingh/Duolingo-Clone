type Props = {
    children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default MarketingLayout;