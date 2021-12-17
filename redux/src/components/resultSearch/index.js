import "./Styles.css";
export const ResultSearch = ({ stateSearch, dataResultSearch }) => {
  return (
    <>
      {stateSearch.length > 0 && dataResultSearch.length === 0 ? (
        <div className="row-results">
          <p className="text">
            <strong className="space">No person is found </strong>
          </p>
        </div>
      ) : (
        dataResultSearch?.map((value, index) => {
          return (
            <div className="row-results" key={index}>
              <p className="text">
                <strong className="space">Name: </strong> {value.name}{" "}
                <strong className="space"> User Name: </strong>
                {value.username}
              </p>
              <p className="text">
                <strong className="space">Phone: </strong> {value.phone}
                <strong className="space">Email:</strong> {value.email}
              </p>
            </div>
          );
        })
      )}
    </>
  );
};
export default ResultSearch;
