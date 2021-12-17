import "./Styles.css";
export const ResultSearch = ({stateSearch,dataResultSearch }) => {
  console.log(dataResultSearch.length);
  return (
    <>
      {!dataResultSearch.length === 0 ? (
        dataResultSearch?.map((value, index) => {
          return (
            <div className="row-results" key={index}>
              <p className="text">
                <strong className="space">Name: </strong> {value.name}{" "}
                <strong className="space"> User Name: </strong>
                {value.username}
              </p>
              <hr className="lineSpace" />
              <p className="text">
                <strong className="space">Phone: </strong> {value.phone}
                <strong className="space">Email:</strong> {value.email}
              </p>
            </div>
          );
        })
      ) : (
        <div className="row-results">
          <p className="text">
            <strong className="space">No person is found </strong>
          </p>
        </div>
      )}
    </>
  );
};
export default ResultSearch;
