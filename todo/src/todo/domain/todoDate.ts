export class TodoDate {

  private readonly value: Date ;

  constructor(
    { newDate,
    }: { newDate: Date | null }
  ) {
    this.value = this.validateDate({ createDate: newDate });

  }

  private validateDate({ createDate }: { createDate: Date | null }) {

    const date = createDate ? new Date(createDate) : this.today();

    return date;
  }

  private today(){
    return new Date();
  }

  getValue(){
    return this.value
  }

}