function Address({ address }) {
  return (
    <div className="flex justify-center">
      {address.map((add) => (
        <span key={add.link} className="mr-3">
          <a href={add.link} target="_blank">
            {add.tag}
          </a>
        </span>
      ))}
    </div>
  );
}

export default Address;
