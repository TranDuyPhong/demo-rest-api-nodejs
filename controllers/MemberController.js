const Member = require('../models/Member');

module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            Member.find(params).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            Member.findById(id).then(data => {
                resolve(data);
            }).catch(err => {
                reject(new Error(`Member ${id} not found`));
            });
        });
    },
    post: (params) => {
        return new Promise((resolve, reject) => {
            Member.create(params).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        });
    },
    put: (id, params) => {
        return new Promise((resolve, reject) => {
            Member.findByIdAndUpdate(id, params, { new: true }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            Member.findByIdAndRemove(id).then(() => {
                resolve({
                    id
                });
            }).catch(err => {
                reject(err);
            });
        });
    }
};