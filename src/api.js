export const fetchResponse = async (chat) => {
    try {
      const response = await fetch('https://serverchat-5vgw.onrender.com', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: chat.map((message) => message.message).join("\n")
        })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching response:', error);
      throw error; // Rethrow the error to handle it at the caller level
    }
  };
  