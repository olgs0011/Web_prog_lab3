export const rightsReservedTemplate = (rightsReservedData) => {
    return `
      <div class="rights_reserved_text">
        © ${rightsReservedData.year} ${rightsReservedData.company}. ${rightsReservedData.message}
      </div>
    `;
  };
  