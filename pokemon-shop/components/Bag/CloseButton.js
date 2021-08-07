const CloseButton = ({ Icon, handleCartClick }) => {
  return (
    <div className="absolute">
      <Icon className="h-8 cursor-pointer" onClick={() => handleCartClick()} />
    </div>
  );
};

export default CloseButton;
