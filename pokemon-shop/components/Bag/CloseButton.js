const CloseButton = ({ Icon, handleCartClick }) => {
  return (
    <div className="absolute top-0 left-0">
      <Icon className="h-8 cursor-pointer" onClick={() => handleCartClick()} />
    </div>
  );
};

export default CloseButton;
