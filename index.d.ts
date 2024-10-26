/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
export interface AddSignatureToFundTransactionRequest {
    fundTxHex: string;
    signature: string;
    prevTxId: string;
    prevVout: number;
    pubkey: string;
}

export interface AddSignatureToFundTransactionResponse {
    hex: string;
}

export interface AddSignaturesToRefundTxRequest {
    refundTxHex: string;
    signatures: string[];
    fundTxId: string;
    fundVout?: number;
    localFundPubkey: string;
    remoteFundPubkey: string;
}

export interface AddSignaturesToRefundTxResponse {
    hex: string;
}

export interface TxInInfoRequest {
    txid: string;
    vout: number;
    redeemScript?: string;
    maxWitnessLength: number;
    inputSerialId?: bigint | number;
}

export interface TxInInfoRequest {
    txid: string;
    vout: number;
    redeemScript?: string;
    maxWitnessLength: number;
    inputSerialId?: bigint | number;
}

export interface CreateBatchDlcTransactionsRequest {
    localPayouts: bigint | number[];
    remotePayouts: bigint | number[];
    numPayouts: bigint | number[];
    localFundPubkeys: string[];
    localFinalScriptPubkeys: string[];
    remoteFundPubkeys: string[];
    remoteFinalScriptPubkeys: string[];
    localInputAmount: bigint | number;
    localCollateralAmounts: bigint | number[];
    localPayoutSerialIds: bigint | number[];
    localChangeSerialId: bigint | number;
    remoteInputAmount: bigint | number;
    remoteCollateralAmounts: bigint | number[];
    remotePayoutSerialIds: bigint | number[];
    remoteChangeSerialId: bigint | number;
    refundLocktimes: bigint | number[];
    localInputs: TxInInfoRequest[];
    localChangeScriptPubkey: string;
    remoteInputs: TxInInfoRequest[];
    remoteChangeScriptPubkey: string;
    feeRate: number;
    cetLockTime?: bigint | number;
    fundLockTime?: bigint | number;
    fundOutputSerialIds?: bigint | number[];
}

export interface CreateBatchDlcTransactionsResponse {
    fundTxHex: string;
    cetsHexList: string[];
    refundTxHexList: string[];
}

export interface TxInInfoRequest {
    txid: string;
    vout: number;
    redeemScript?: string;
    maxWitnessLength: number;
    inputSerialId?: bigint | number;
}

export interface TxOutRequest {
    amount: bigint | number;
    address: string;
}

export interface TxInInfoRequest {
    txid: string;
    vout: number;
    redeemScript?: string;
    maxWitnessLength: number;
    inputSerialId?: bigint | number;
}

export interface TxOutRequest {
    amount: bigint | number;
    address: string;
}

export interface CreateBatchFundTransactionRequest {
    localPubkeys: string[];
    remotePubkeys: string[];
    outputAmounts: bigint | number[];
    localInputs: TxInInfoRequest[];
    localChange: TxOutRequest;
    remoteInputs: TxInInfoRequest[];
    remoteChange: TxOutRequest;
    feeRate: bigint | number;
    lockTime?: bigint | number;
    localSerialId?: bigint | number;
    remoteSerialId?: bigint | number;
    outputSerialIds: bigint | number[];
}

export interface CreateBatchFundTransactionResponse {
    hex: string;
}

export interface CreateCetRequest {
    localFundPubkey: string;
    remoteFundPubkey: string;
    localFinalAddress: string;
    remoteFinalAddress: string;
    localPayout: bigint | number;
    remotePayout: bigint | number;
    fundTxId: string;
    fundVout?: number;
    lockTime: bigint | number;
    localSerialId?: bigint | number;
    remoteSerialId?: bigint | number;
}

export interface CreateCetResponse {
    hex: string;
}

export interface CreateCetAdaptorSignatureRequest {
    cetHex: string;
    privkey: string;
    fundTxId: string;
    fundVout?: number;
    localFundPubkey: string;
    remoteFundPubkey: string;
    oraclePubkey: string;
    oracleRValues: string[];
    fundInputAmount: bigint | number;
    messages: string[];
}

export interface CreateCetAdaptorSignatureResponse {
    signature: string;
    proof: string;
}

export interface Messages {
    messages: string[];
}

export interface CreateCetAdaptorSignaturesRequest {
    cetsHex: string[];
    privkey: string;
    fundTxId: string;
    fundVout?: number;
    localFundPubkey: string;
    remoteFundPubkey: string;
    oraclePubkey: string;
    oracleRValues: string[];
    fundInputAmount: bigint | number;
    messagesList: Messages[];
}

export interface AdaptorPair {
    signature: string;
    proof: string;
}

export interface CreateCetAdaptorSignaturesResponse {
    adaptorPairs: AdaptorPair[];
}

export interface PayoutRequest {
    local: bigint | number;
    remote: bigint | number;
}

export interface TxInInfoRequest {
    txid: string;
    vout: number;
    redeemScript?: string;
    maxWitnessLength: number;
    inputSerialId?: bigint | number;
}

export interface TxInInfoRequest {
    txid: string;
    vout: number;
    redeemScript?: string;
    maxWitnessLength: number;
    inputSerialId?: bigint | number;
}

export interface CreateDlcTransactionsRequest {
    payouts: PayoutRequest[];
    localFundPubkey: string;
    localFinalScriptPubkey: string;
    remoteFundPubkey: string;
    remoteFinalScriptPubkey: string;
    localInputAmount: bigint | number;
    localCollateralAmount: bigint | number;
    localPayoutSerialId: bigint | number;
    localChangeSerialId: bigint | number;
    remoteInputAmount: bigint | number;
    remoteCollateralAmount: bigint | number;
    remotePayoutSerialId: bigint | number;
    remoteChangeSerialId: bigint | number;
    refundLocktime: bigint | number;
    localInputs: TxInInfoRequest[];
    localChangeScriptPubkey: string;
    remoteInputs: TxInInfoRequest[];
    remoteChangeScriptPubkey: string;
    feeRate: number;
    cetLockTime?: bigint | number;
    fundLockTime?: bigint | number;
    fundOutputSerialId?: bigint | number;
    optionDest?: string;
    optionPremium?: bigint | number;
}

export interface CreateDlcTransactionsResponse {
    fundTxHex: string;
    cetsHex: string[];
    refundTxHex: string;
}

export interface TxInInfoRequest {
    txid: string;
    vout: number;
    redeemScript?: string;
    maxWitnessLength: number;
    inputSerialId?: bigint | number;
}

export interface TxOutRequest {
    amount: bigint | number;
    address: string;
}

export interface TxInInfoRequest {
    txid: string;
    vout: number;
    redeemScript?: string;
    maxWitnessLength: number;
    inputSerialId?: bigint | number;
}

export interface TxOutRequest {
    amount: bigint | number;
    address: string;
}

export interface CreateFundTransactionRequest {
    localPubkey: string;
    remotePubkey: string;
    outputAmount: bigint | number;
    localInputs: TxInInfoRequest[];
    localChange: TxOutRequest;
    remoteInputs: TxInInfoRequest[];
    remoteChange: TxOutRequest;
    feeRate: bigint | number;
    optionDest?: string;
    optionPremium?: bigint | number;
    lockTime?: bigint | number;
    localSerialId?: bigint | number;
    remoteSerialId?: bigint | number;
    outputSerialId?: bigint | number;
}

export interface CreateFundTransactionResponse {
    hex: string;
}

export interface CreateRefundTransactionRequest {
    localFinalScriptPubkey: string;
    remoteFinalScriptPubkey: string;
    localAmount: bigint | number;
    remoteAmount: bigint | number;
    lockTime: bigint | number;
    fundTxId: string;
    fundVout?: number;
}

export interface CreateRefundTransactionResponse {
    hex: string;
}

export interface InnerErrorResponse {
    code: number;
    type: string;
    message: string;
}

export interface ErrorResponse {
    error: InnerErrorResponse;
}

export interface GetRawFundTxSignatureRequest {
    fundTxHex: string;
    privkey: string;
    prevTxId: string;
    prevVout: number;
    amount: bigint | number;
}

export interface GetRawFundTxSignatureResponse {
    hex: string;
}

export interface GetRawRefundTxSignatureRequest {
    refundTxHex: string;
    privkey: string;
    fundTxId: string;
    fundVout?: number;
    localFundPubkey: string;
    remoteFundPubkey: string;
    fundInputAmount: bigint | number;
}

export interface GetRawRefundTxSignatureResponse {
    hex: string;
}

export interface SignCetRequest {
    cetHex: string;
    fundPrivkey: string;
    fundTxId: string;
    fundVout?: number;
    localFundPubkey: string;
    remoteFundPubkey: string;
    fundInputAmount: bigint | number;
    adaptorSignature: string;
    oracleSignatures: string[];
}

export interface SignCetResponse {
    hex: string;
}

export interface SignFundTransactionRequest {
    fundTxHex: string;
    privkey: string;
    prevTxId: string;
    prevVout: number;
    amount: bigint | number;
}

export interface SignFundTransactionResponse {
    hex: string;
}

export interface VerifyCetAdaptorSignatureRequest {
    cetHex: string;
    adaptorSignature: string;
    adaptorProof: string;
    messages: string[];
    localFundPubkey: string;
    remoteFundPubkey: string;
    oraclePubkey: string;
    oracleRValues: string[];
    fundTxId: string;
    fundVout?: number;
    fundInputAmount: bigint | number;
    verifyRemote: boolean;
}

export interface VerifyCetAdaptorSignatureResponse {
    valid: boolean;
}

export interface AdaptorPair {
    signature: string;
    proof: string;
}

export interface Messages {
    messages: string[];
}

export interface VerifyCetAdaptorSignaturesRequest {
    cetsHex: string[];
    adaptorPairs: AdaptorPair[];
    messagesList: Messages[];
    localFundPubkey: string;
    remoteFundPubkey: string;
    oraclePubkey: string;
    oracleRValues: string[];
    fundTxId: string;
    fundVout?: number;
    fundInputAmount: bigint | number;
    verifyRemote: boolean;
}

export interface VerifyCetAdaptorSignaturesResponse {
    valid: boolean;
}

export interface VerifyFundTxSignatureRequest {
    fundTxHex: string;
    signature: string;
    pubkey: string;
    prevTxId: string;
    prevVout: number;
    fundInputAmount: bigint | number;
}

export interface VerifyFundTxSignatureResponse {
    valid: boolean;
}

export interface VerifyRefundTxSignatureRequest {
    refundTxHex: string;
    signature: string;
    localFundPubkey: string;
    remoteFundPubkey: string;
    fundTxId: string;
    fundVout?: number;
    fundInputAmount: bigint | number;
    verifyRemote: boolean;
}

export interface VerifyRefundTxSignatureResponse {
    valid: boolean;
}

export class Cfddlcjs {
    AddSignatureToFundTransaction(jsonObject: AddSignatureToFundTransactionRequest): Promise<AddSignatureToFundTransactionResponse>;
    AddSignaturesToRefundTx(jsonObject: AddSignaturesToRefundTxRequest): Promise<AddSignaturesToRefundTxResponse>;
    CreateBatchDlcTransactions(jsonObject: CreateBatchDlcTransactionsRequest): Promise<CreateBatchDlcTransactionsResponse>;
    CreateBatchFundTransaction(jsonObject: CreateBatchFundTransactionRequest): Promise<CreateBatchFundTransactionResponse>;
    CreateCet(jsonObject: CreateCetRequest): Promise<CreateCetResponse>;
    CreateCetAdaptorSignature(jsonObject: CreateCetAdaptorSignatureRequest): Promise<CreateCetAdaptorSignatureResponse>;
    CreateCetAdaptorSignatures(jsonObject: CreateCetAdaptorSignaturesRequest): Promise<CreateCetAdaptorSignaturesResponse>;
    CreateDlcTransactions(jsonObject: CreateDlcTransactionsRequest): Promise<CreateDlcTransactionsResponse>;
    CreateFundTransaction(jsonObject: CreateFundTransactionRequest): Promise<CreateFundTransactionResponse>;
    CreateRefundTransaction(jsonObject: CreateRefundTransactionRequest): Promise<CreateRefundTransactionResponse>;
    GetRawFundTxSignature(jsonObject: GetRawFundTxSignatureRequest): Promise<GetRawFundTxSignatureResponse>;
    GetRawRefundTxSignature(jsonObject: GetRawRefundTxSignatureRequest): Promise<GetRawRefundTxSignatureResponse>;
    SignCet(jsonObject: SignCetRequest): Promise<SignCetResponse>;
    SignFundTransaction(jsonObject: SignFundTransactionRequest): Promise<SignFundTransactionResponse>;
    VerifyCetAdaptorSignature(jsonObject: VerifyCetAdaptorSignatureRequest): Promise<VerifyCetAdaptorSignatureResponse>;
    VerifyCetAdaptorSignatures(jsonObject: VerifyCetAdaptorSignaturesRequest): Promise<VerifyCetAdaptorSignaturesResponse>;
    VerifyFundTxSignature(jsonObject: VerifyFundTxSignatureRequest): Promise<VerifyFundTxSignatureResponse>;
    VerifyRefundTxSignature(jsonObject: VerifyRefundTxSignatureRequest): Promise<VerifyRefundTxSignatureResponse>;
}

export function addInitializedListener(func: () => Promise<void>): void;

export function getCfddlc(): Cfddlcjs;

export function hasLoadedWasm(): boolean;

export class CfdError extends Error {
    constructor(message: string, errorInformation: InnerErrorResponse, cause: Error);
    toString(): string;
    getErrorInformation(): InnerErrorResponse;
    getCause(): Error;
}
