function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event);
    };
    return (
        <button onClick={(event) => handleDelete(1, event)}>
            삭제하기
        </button>
    );
}
export default MyButton;