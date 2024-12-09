function InventoryItem({
  name,
  type,
  quantity = 0,
  price = 0,
}) /* TODO: Take the props. Set defaults to the quantity. */ {
  const quantityItems = quantity < 5;
  const highValue = quantity * price > 1000;
  return (
    <div>
      <h2>
        {name} ({type})
      </h2>
      {quantityItems && (
        <Message>
          <p>⚠️ Low Stock! {quantity} remained.</p>
        </Message>
      )}
      {highValue && (
        <Message>
          <p>💰 High value - consider protection!</p>
        </Message>
      )}
    </div>
  );
}
