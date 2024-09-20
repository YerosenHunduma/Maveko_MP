export class apiFilter {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword
            ? {
                  name: {
                      $regex: this.queryStr.keyword,
                      $options: 'i'
                  }
              }
            : {};

        this.query = this.query.find({ ...keyword });

        return this;
    }

    populate() {
        this.query = this.query.populate({
            path: 'source_id',
            select: '-createdAt -updatedAt -__v'
        });
        return this;
    }

    pagination(resPerPage) {
        const currentPage = parseInt(this.queryStr.page) || 1;
        const skip = (currentPage - 1) * resPerPage;
        this.query = this.query.limit(resPerPage).skip(skip);

        return this;
    }
}
