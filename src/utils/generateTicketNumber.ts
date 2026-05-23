const generateTicketNumber = () => {
  return `TKT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

export default generateTicketNumber;