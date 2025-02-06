import { describe, it } from 'mocha';
import { strict as assert } from 'assert';
import request from 'supertest';
import app from '../calculator.js';

describe('Calculator API', () => {
    describe('GET /add', () => {
        it('should return the sum of two numbers', async () => {
            const res = await request(app).get('/add').query({ a: 1, b: 2 });
            assert.equal(res.status, 200);
            assert.equal(res.body.result, 3);
        });
    });

    describe('GET /subtract', () => {
        it('should return the difference of two numbers', async () => {
            const res = await request(app).get('/subtract').query({ a: 5, b: 3 });
            assert.equal(res.status, 200);
            assert.equal(res.body.result, 2);
        });
    });

    describe('GET /multiply', () => {
        it('should return the product of two numbers', async () => {
            const res = await request(app).get('/multiply').query({ a: 4, b: 3 });
            assert.equal(res.status, 200);
            assert.equal(res.body.result, 12);
        });
    });

    describe('GET /divide', () => {
        it('should return the quotient of two numbers', async () => {
            const res = await request(app).get('/divide').query({ a: 10, b: 2 });
            assert.equal(res.status, 200);
            assert.equal(res.body.result, 5);
        });

        it('should return an error when dividing by zero', async () => {
            const res = await request(app).get('/divide').query({ a: 10, b: 0 });
            assert.equal(res.status, 400);
            assert.equal(res.body.error, 'Division by zero');
        });
    });
});
