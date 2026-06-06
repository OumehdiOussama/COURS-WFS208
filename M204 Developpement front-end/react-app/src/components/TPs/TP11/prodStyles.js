const ProdStyles = {
    card: {
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        padding: '15px',
        textAlign: 'center',
        width: '250px',
        backgroundColor: '#ecf5f7',
        margin: '10px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
    },
    cardHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '10px',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '6px',
        color: '#2c3e50',
    },
    price: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '4px',
        color: '#4d2fb9ff',
    },
    type: {
        fontSize: '14px',
        marginBottom: '10px',
        color: '#555',
    },
    description: {
        fontSize: '14px',
        color: '#555',
        margin: '10px auto',
        textAlign: 'justify',
        maxWidth: '500px', 
        lineHeight: '1.5', 
    },
    button: {
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s, transform 0.2s',
        fontWeight: 'bold',
    },
    buttonHover: {
        backgroundColor: '#218838',
        transform: 'scale(1.05)',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '100px 20px',
        gap: '16px',
    },
    // Responsive pour mobile
    '@media (max-width: 600px)': {
        container: {
            padding: '60px 10px',
        },
        card: {
            width: '90%',
            margin: '10px auto',
        },
        image: {
            height: '180px',
        },
    },
};

export default ProdStyles;