type Props ={
    children: React.ReactNode;
};

const MainLayout = ({
    children
}: Props) => {
    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default MainLayout;