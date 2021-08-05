const CloseButton = ({ Icon, handleCartClick }) => {
  return (
    <div className="absolute top-2 left-2">
      <Icon className="h-8 cursor-pointer" onClick={() => handleCartClick()} />
    </div>
  );
};

export default CloseButton;
