import {tokenSymbol} from '../utils/networkConstants';

export type ChainPropType = {
	[index: string]: ChainProps;
};

export interface ChainProps {
	peopleKusamaRpcEndpoint?: string;
	preImageBaseDeposit?: string;
	palletInstance?: string;
	parachain?: string;
	blockTime: number;
	logo?: any;
	ss58Format: number;
	tokenDecimals: number;
	tokenSymbol: TokenSymbol;
	chainId: number;
	rpcEndpoint: string;
	category: string;
	subsquidUrl: string;
	treasuryProposalBondPercent: string | null;
	treasuryProposalMinBond: string | null;
	treasuryProposalMaxBond: string | null;
	externalLinks: string;
	rpcEndpoints: TRPCEndpoint[];
	relayRpcEndpoints?: TRPCEndpoint[];
	gTag: string | null;
}

export type TokenSymbol = (typeof tokenSymbol)[keyof typeof tokenSymbol];

export type TRPCEndpoint = {
	key: string;
	label: string;
};
